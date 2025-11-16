/**
 * API Documentation Content for Conversion Endpoints
 */

export const apiDocumentation = {
  '/api/files/upload': {
    method: 'POST',
    description: 'Upload a file for conversion',
    parameters: [
      {
        name: 'file',
        type: 'file',
        required: true,
      },
    ],
  },
  '/api/files/convert': {
    method: 'POST',
    description: 'Convert an uploaded file',
    parameters: [
      {
        name: 'fileId',
        type: 'string',
        required: true,
      },
      {
        name: 'targetFormat',
        type: 'string',
        required: true,
      },
    ],
  },
  '/api/files/download/:id': {
    method: 'GET',
    description: 'Download a converted file',
    parameters: [
      {
        name: 'id',
        type: 'string',
        required: true,
      },
      {
        name: 'format',
        type: 'string',
        required: true,
      },
    ],
  },
};

