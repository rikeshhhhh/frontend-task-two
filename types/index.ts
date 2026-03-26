export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
  address: Address;
  phone: string;
  website: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewPostForm {
  title: string;
  body: string;
}
