import { useState } from 'react';
import { convertFile } from '../services/api';

interface ConversionFormProps {
  fileId: string;
  fileName: string;
}

export default function ConversionForm({ fileId, fileName }: ConversionFormProps) {
  const [targetFormat, setTargetFormat] = useState('');
  const [converting, setConverting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = async () => {
    if (!targetFormat.trim()) {
      setError('Please enter a target format');
      return;
    }

    setConverting(true);
    setError(null);
    setResult(null);

    try {
      const response = await convertFile(fileId, targetFormat);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="conversion-form">
      <h2>Convert File</h2>
      <p>File: {fileName}</p>
      <div className="form-group">
        <label htmlFor="targetFormat">Target Format:</label>
        <input
          id="targetFormat"
          type="text"
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
          placeholder="e.g., pdf, png, docx"
          disabled={converting}
        />
      </div>
      <button onClick={handleConvert} disabled={converting}>
        {converting ? 'Converting...' : 'Convert'}
      </button>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h3>Conversion Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

