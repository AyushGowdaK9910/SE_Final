import { useState } from 'react';
import { uploadFile } from '../services/api';

interface FileUploadProps {
  onUploadSuccess: (fileId: string, fileName: string) => void;
}

export default function FileUpload({ onUploadSuccess }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const result = await uploadFile(file);
      onUploadSuccess(result.id, result.fileName);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        accept=".md,.csv,.docx,.txt,.json"
      />
      {file && (
        <div className="file-info">
          <p>Selected: {file.name}</p>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

