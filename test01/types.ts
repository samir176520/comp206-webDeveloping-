export interface Car {
    id: number;
    brand: string;
    model: string;
    class: 'A' | 'B' | 'C';
  }
  
  export interface User {
    id: number;
    name: string;
    age: number;
  }
  
  export interface Interest {
    id: number;
    userId: number;
    carId: number;
  }