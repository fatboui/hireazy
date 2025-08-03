import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-toastify/dist/ReactToastify.css";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { ToastContainer, toast } from "react-toastify";

interface JobPostingModalProps {
  open: boolean;
  onClose: () => void;
  onJobAdded: (newJob: unknown) => void;
}

interface FormData {
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
  attachJD: File | null;
}

interface JobPostingModalProps {
  open: boolean;
  onClose: () => void;
  onJobAdded: (newJob: unknown) => void;
}

const JobPostingModal: React.FC<JobPostingModalProps> = ({ open, onClose, onJobAdded }) => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: '',
    roleType: '',
    level: '',
    jobDescription: '',
    keySkills: '',
    preferredBackground: '',
    interviewType: '',
    interviewDuration: '',
    rounds: 1,
    preferredTimeline: '',
    confidentialNotes: '',
    attachJD: null,
  });

  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const modalRef = useRef<HTMLDivElement>(null);

  // Add ref for file input to clear it on reset
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (!name) return;

    if (name === 'rounds') {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, attachJD: e.target.files[0] });
    }
  };

  const handleDateRangeChange = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection.startDate && selection.endDate) {
      setDateRange([selection]);
      const start = selection.startDate.toISOString().split('T')[0];
      const end = selection.endDate.toISOString().split('T')[0];
      setFormData({ ...formData, preferredTimeline: `${start} to ${end}` });
    }
  };

  const saveJobToDatabase = async (job: any) => {
    // Placeholder for actual database save logic
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Job saved to database:", job);
        resolve(true);
      }, 1000);
    });
  };

  const handleSubmit = async () => {
    // Construct new job object from formData
    const newJob = {
      title: formData.jobTitle,
      roleType: formData.roleType,
      level: formData.level,
      jobDescription: formData.jobDescription,
      keySkills: formData.keySkills,
      preferredBackground: formData.preferredBackground,
      interviewType: formData.interviewType,
      interviewDuration: formData.interviewDuration,
      rounds: formData.rounds,
      preferredTimeline: formData.preferredTimeline,
      confidentialNotes: formData.confidentialNotes,
      attachJD: formData.attachJD ? formData.attachJD.name : null,
      status: "Pending Interviewer Assignment",
      applicants: 0,
      interviews: 0,
      created: new Date().toISOString().split('T')[0],
      deadline: formData.preferredTimeline.split(' to ')[1] || '',
    };

    try {
      await saveJobToDatabase(newJob);
      toast.success('Job posted successfully!');
      onJobAdded(newJob);
      // Reset form data to initial empty values after submission
      setFormData({
        jobTitle: '',
        roleType: '',
        level: '',
        jobDescription: '',
        keySkills: '',
        preferredBackground: '',
        interviewType: '',
        interviewDuration: '',
        rounds: 1,
        preferredTimeline: '',
        confidentialNotes: '',
        attachJD: null,
      });
      // Reset date range to today
      setDateRange([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      // Clear file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      toast.error('Failed to post job. Please try again.');
      console.error("Error saving job:", error);
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
        ref={modalRef}
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
          <h2
            id="modal-title"
            className="text-2xl font-semibold mb-4 text-gray-900"
          >
            Add Job
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="roleType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role Type
              </label>
              <select
                id="roleType"
                name="roleType"
                value={formData.roleType}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
                required
              >
                <option value="">Select Role Type</option>
                <option value="IB">IB</option>
                <option value="PE">PE</option>
                <option value="VC">VC</option>
                <option value="M&A">M&A</option>
                <option value="FP&A">FP&A</option>
                <option value="Corp Dev">Corp Dev</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Level
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              >
                <option value="">Select Level</option>
                <option value="Intern">Intern</option>
                <option value="Analyst">Analyst</option>
                <option value="Associate">Associate</option>
                <option value="VP">VP</option>
                <option value="Direactor">Direactor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="jobDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                rows={4}
                value={formData.jobDescription}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1 resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="keySkills"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Key Skills
              </label>
              <input
                type="text"
                id="keySkills"
                name="keySkills"
                value={formData.keySkills}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="preferredBackground"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Background
              </label>
              <input
                type="text"
                id="preferredBackground"
                name="preferredBackground"
                value={formData.preferredBackground}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="interviewType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Interview Type
              </label>
              <select
                id="interviewType"
                name="interviewType"
                value={formData.interviewType}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              >
                <option value="">Select Interview Type</option>
                <option value="Technical">Technical</option>
                <option value="Case-based">Case-based</option>
                <option value="Behavioral">Behavioral</option>
                <option value="All">All</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="interviewDuration"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Interview Duration
              </label>
              <select
                id="interviewDuration"
                name="interviewDuration"
                value={formData.interviewDuration}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              >
                <option value="">Select Interview Duration</option>
                <option value="30 min">30 min</option>
                <option value="60 min">60 min</option>
                <option value="90 min">90 min</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="rounds"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Rounds
              </label>
              <input
                type="number"
                id="rounds"
                name="rounds"
                value={formData.rounds}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
                min={1}
              />
            </div>

            <div>
              <label
                htmlFor="preferredTimeline"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Interview Timeline
              </label>
              <DateRange
                editableDateInputs={true}
                onChange={handleDateRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="border rounded-md"
              />
              {formData.preferredTimeline && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected Range: {formData.preferredTimeline}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confidentialNotes"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confidential Notes
              </label>
              <input
                type="text"
                id="confidentialNotes"
                name="confidentialNotes"
                value={formData.confidentialNotes}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
              />
            </div>

                        <div>
              <label
                htmlFor="attachJD"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Attach Job Description
              </label>
              <input
                type="file"
                id="attachJD"
                name="attachJD"
                title="Attach Job Description"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                ref={fileInputRef}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default JobPostingModal;
