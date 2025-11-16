import { useState } from 'react';
import FileUpload from './components/FileUpload';
import ConversionForm from './components/ConversionForm';
import './App.css';

function App() {
  const [fileId, setFileId] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleUploadSuccess = (id: string, name: string) => {
    setFileId(id);
    setFileName(name);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Converty - File Conversion Service</h1>
      </header>
      <main className="app-main">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        {fileId && (
          <ConversionForm fileId={fileId} fileName={fileName} />
        )}
      </main>
    </div>
  );
}

export default App;

