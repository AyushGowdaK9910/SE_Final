// Type declaration for supertest module
declare module 'supertest' {
  import { Application } from 'express';
  
  interface Test {
    expect(status: number): this;
    expect(body: any): this;
    expect(header: string, value: string): this;
    end(callback?: (err: any, res: any) => void): this;
    [key: string]: any;
  }
  
  interface SuperTest {
    get(url: string): Test;
    post(url: string): Test;
    put(url: string): Test;
    delete(url: string): Test;
    patch(url: string): Test;
    head(url: string): Test;
    options(url: string): Test;
  }
  
  function request(app: Application): SuperTest;
  export = request;
}

