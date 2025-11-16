import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface UploadResponse {
  success: boolean;
  data: {
    id: string;
    fileName: string;
    sourceFormat: string;
    size: number;
    uploadedAt: string;
  };
}

export interface ConvertRequest {
  fileId: string;
  targetFormat: string;
  sourceFormat?: string;
}

export interface ConvertResponse {
  success: boolean;
  data: {
    id: string;
    originalFileId: string;
    convertedFileName: string;
    sourceFormat: string;
    targetFormat: string;
    size: number;
    convertedAt: string;
  };
}

export async function uploadFile(file: File): Promise<{ id: string; fileName: string }> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post<UploadResponse>('/api/files/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.data.success) {
    return {
      id: response.data.data.id,
      fileName: response.data.data.fileName,
    };
  }
  throw new Error('Upload failed');
}

export async function convertFile(
  fileId: string,
  targetFormat: string
): Promise<ConvertResponse['data']> {
  const response = await api.post<ConvertResponse>('/api/files/convert', {
    fileId,
    targetFormat,
  });

  if (response.data.success) {
    return response.data.data;
  }
  throw new Error('Conversion failed');
}

export default api;

