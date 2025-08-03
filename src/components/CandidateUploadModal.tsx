import * as pdfjsLib from "pdfjs-dist";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.js",
  import.meta.url
).toString();

interface TextItem {
  str: string;
}

interface Candidate {
  id: string;
  name: string;
  email: string;
  interviewLink: string;
  status: string;
}

interface CandidateUploadModalProps {
  open: boolean;
  onClose: () => void;
  onCandidatesUploaded: (candidates: Candidate[]) => void;
  jobId: number;
}

const CandidateUploadModal: React.FC<CandidateUploadModalProps> = ({
  open,
  onClose,
  onCandidatesUploaded,
  jobId,
}) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [uploadError, setUploadError] = useState<string>("");

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError("");
    setCandidates([]);

    const fileType = file.type;

    if (fileType === "application/pdf") {
      try {
        await parsePDF(file);
      } catch {
        setUploadError("Failed to parse PDF file.");
      }
    } else if (
      fileType === "text/csv" ||
      file.name.toLowerCase().endsWith(".csv")
    ) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result;
        if (typeof text === "string") {
          parseCSV(text);
        }
      };
      reader.readAsText(file);
    } else {
      setUploadError("Unsupported file format. Please upload a CSV or PDF file.");
    }
  };

  const parseCSV = (text: string) => {
    const lines = text.trim().split("\n");
    const parsedCandidates: Candidate[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const [name, email] = line.split(",");
      if (!name || !email) {
        setUploadError("Invalid CSV format. Each line must have name and email.");
        return;
      }
      const interviewLink = `https://interviews.hireazy.com/${uuidv4()}`;
      parsedCandidates.push({
        id: uuidv4(),
        name: name.trim(),
        email: email.trim(),
        interviewLink,
        status: "Pending",
      });
    }
    setCandidates(parsedCandidates);
    setUploadError("");
  };

  const parsePDF = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf: any = await (pdfjsLib as any).getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content: any = await page.getTextContent();
        const strings = content.items.map((item: TextItem) => item.str);
        fullText += strings.join(" ") + "\n";
      }
      extractCandidatesFromText(fullText);
    } catch {
      setUploadError("Failed to parse PDF file.");
    }
  };

  const extractCandidatesFromText = (text: string) => {
    // Simple heuristic: extract lines containing name and email
    // Assume each candidate info is on a separate line with name and email separated by space or comma
    const lines = text.split("\n");
    const parsedCandidates: Candidate[] = [];

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;
      // Try to extract email using regex
      const emailMatch = trimmedLine.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailMatch) {
        const email = emailMatch[0];
        // Remove email from line to get name
        const name = trimmedLine.replace(email, "").replace(/[,]/g, "").trim();
        if (name) {
          const interviewLink = `https://interviews.hireazy.com/${uuidv4()}`;
          parsedCandidates.push({
            id: uuidv4(),
            name,
            email,
            interviewLink,
            status: "Pending",
          });
        }
      }
    }

    if (parsedCandidates.length === 0) {
      setUploadError("No valid candidate data found in PDF.");
    } else {
      setCandidates(parsedCandidates);
      setUploadError("");
    }
  };

  const handleSubmit = () => {
    if (candidates.length === 0) {
      setUploadError("No candidates to upload.");
      return;
    }
    // Mock sending emails
    candidates.forEach((candidate) => {
      console.log(`Sending interview link to ${candidate.email}: ${candidate.interviewLink}`);
    });
    onCandidatesUploaded(candidates);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="candidate-upload-title"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <h2 id="candidate-upload-title" className="text-2xl font-semibold mb-4">
          Upload Candidates for Job #{jobId}
        </h2>
        <input
          type="file"
          placeholder="/"
          accept=".csv,.pdf"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {uploadError && (
        <p className="text-red-600 mb-4">{uploadError}</p>
      )}
      {candidates.length > 0 && (
        <div className="mb-4 max-h-48 overflow-y-auto border border-gray-300 rounded p-2">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th className="border-b border-gray-300 px-2 py-1">Name</th>
                <th className="border-b border-gray-300 px-2 py-1">Email</th>
                <th className="border-b border-gray-300 px-2 py-1">Interview Link</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td className="border-b border-gray-300 px-2 py-1">{candidate.name}</td>
                  <td className="border-b border-gray-300 px-2 py-1">{candidate.email}</td>
                  <td className="border-b border-gray-300 px-2 py-1">
                    <a
                      href={candidate.interviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
      </div>
    </div>
  );
};

export default CandidateUploadModal;
