import React, { ChangeEvent, FormEvent, useState } from "react";

interface JobDetails {
  jobTitle: string;
  roleType: string;
  level: string;
  jobDescription: string;
  keySkills: string;
  preferredBackground: string;
  interviewType: string;
  interviewDuration: string;
  rounds: number;
  preferredTimeline: string;
  confidentialNotes: string;
  attachJDName: string | null;
}

interface Candidate {
  id: number;
  name: string;
  email: string;
  cvFile: File | null;
  notes?: string;
  interviewLink?: string;
  interviewStatus?: 'Pending' | 'Scheduled' | 'Complete';
}

interface CandidateForm {
  name: string;
  email: string;
  cvFile: File | null;
  notes: string;
}

const JobDetailsPage: React.FC = () => {
  // Mock job details - in real app, this would come from props or API
  const [jobDetails] = useState<JobDetails>({
    jobTitle: 'Senior Analyst',
    roleType: 'IB',
    level: 'Analyst',
    jobDescription: 'Responsible for financial modeling and analysis.',
    keySkills: 'Excel, Financial Modeling',
    preferredBackground: 'Investment Banking',
    interviewType: 'Technical',
    interviewDuration: '60 min',
    rounds: 3,
    preferredTimeline: '2024-07-01 to 2024-07-15',
    confidentialNotes: 'Confidential client project',
    attachJDName: 'Senior_Analyst_JD.pdf',
  });

  const [activeTab, setActiveTab] = useState<'overview' | 'upload'>('overview');

  // Candidates state
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateForm, setCandidateForm] = useState<CandidateForm>({
    name: '',
    email: '',
    cvFile: null,
    notes: '',
  });

  // Function to generate unique interview link for a candidate
  const generateInterviewLink = (candidateId: number) => {
    return `https://interviews.hireazy.com/${candidateId}-${Date.now()}`;
  };

  const handleTabChange = (tab: 'overview' | 'upload') => {
    setActiveTab(tab);
  };

  const handleCandidateInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCandidateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCVFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCandidateForm((prev) => ({
        ...prev,
        cvFile: e.target.files![0],
      }));
    }
  };

  const handleAddCandidate = (e: FormEvent) => {
    e.preventDefault();
    if (!candidateForm.name || !candidateForm.email || !candidateForm.cvFile) {
      alert('Please fill in Name, Email and upload CV.');
      return;
    }
    const newCandidate: Candidate = {
      id: Date.now(),
      name: candidateForm.name,
      email: candidateForm.email,
      cvFile: candidateForm.cvFile,
      notes: candidateForm.notes,
      interviewLink: '', // Will be assigned on submit
      interviewStatus: 'Pending',
    };
    setCandidates((prev) => [...prev, newCandidate]);
    setCandidateForm({
      name: '',
      email: '',
      cvFile: null,
      notes: '',
    });
    // Clear file input manually if needed (not shown here)
  };

  // Function to assign interview links to all candidates and finalize upload
  const handleSubmitCandidates = () => {
    const updatedCandidates = candidates.map((candidate) => ({
      ...candidate,
      interviewLink: generateInterviewLink(candidate.id),
      interviewStatus: 'Pending',
    }));
    setCandidates(updatedCandidates);
    alert('Candidates submitted successfully with interview links assigned.');
    // Here you would also update job status to "Candidates Uploaded" in real app
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Job Details</h1>
      <div className="mb-4 border-b border-gray-300">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => handleTabChange('overview')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Job Overview
          </button>
          <button
            onClick={() => handleTabChange('upload')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'upload'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Upload Candidates
          </button>
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div>
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                value={jobDetails.jobTitle}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Role Type</label>
              <input
                type="text"
                value={jobDetails.roleType}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Level</label>
              <input
                type="text"
                value={jobDetails.level}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Job Description</label>
              <textarea
              placeholder="/"
                value={jobDetails.jobDescription}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                rows={4}
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Key Skills</label>
              <input
                type="text"
                value={jobDetails.keySkills}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Preferred Background</label>
              <input
                type="text"
                value={jobDetails.preferredBackground}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Interview Type</label>
              <input
                type="text"
                value={jobDetails.interviewType}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Interview Duration</label>
              <input
                type="text"
                value={jobDetails.interviewDuration}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Number of Rounds</label>
              <input
                type="number"
                value={jobDetails.rounds}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="/"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Preferred Interview Timeline</label>
              <input
                type="text"
                value={jobDetails.preferredTimeline}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Confidential Notes</label>
              <input
                type="text"
                value={jobDetails.confidentialNotes}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Attached Job Description</label>
              <input
                type="text"
                value={jobDetails.attachJDName || 'No file attached'}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </form>
        </div>
      )}

      {activeTab === 'upload' && (
        <div>
          <form onSubmit={handleAddCandidate} className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={candidateForm.name}
                onChange={handleCandidateInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={candidateForm.email}
                onChange={handleCandidateInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="cvFile" className="block font-medium text-gray-700">
                Upload CV
              </label>
              <input
                id="cvFile"
                name="cvFile"
                type="file"
                onChange={handleCVFileChange}
                className="mt-1 block w-full"
                accept=".pdf,.doc,.docx,.txt"
                required
              />
            </div>
            <div>
              <label htmlFor="notes" className="block font-medium text-gray-700">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={candidateForm.notes}
                onChange={handleCandidateInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700"
            >
              Add Candidate
            </button>
          </form>

          <div>
            <h2 className="text-xl font-semibold mb-2">Candidates Added</h2>
            {candidates.length === 0 ? (
              <p>No candidates added yet.</p>
            ) : (
              <ul className="space-y-2">
                {candidates.map((candidate) => (
                  <li
                    key={candidate.id}
                    className="border rounded-md p-3 flex justify-between items-center"
                  >
                    <div>
                      <p>
                        <strong>Name:</strong> {candidate.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {candidate.email}
                      </p>
                      <p>
                        <strong>Notes:</strong> {candidate.notes || 'N/A'}
                      </p>
                      <p>
                        <strong>CV File:</strong> {candidate.cvFile ? candidate.cvFile.name : 'N/A'}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <button
              onClick={handleSubmitCandidates}
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
              disabled={candidates.length === 0}
            >
              Submit Candidates
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
