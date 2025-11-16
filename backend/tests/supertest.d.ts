/// <reference types="supertest" />

declare module 'supertest' {
  import { Application } from 'express';
  
  interface Test extends supertest.SuperTest<supertest.Test> {}
  
  function request(app: Application): Test;
  
  export = request;
}

