import { AccountType, Renderer, Role } from '../enums';

// interface user
export interface User {
  id?: string;
  name: string;
  email: string;
  photoURL: string;
  createdAt: string;
  lastLoginAt?: string;
  type: AccountType;
  disabled: boolean;
  organizations: {
    [key: string]: {
      role: Role;
      disabled: boolean;
    };
  };
}

// interface organization
export interface Organization {
  id?: string;
  name: string;
  email: string;
  photoURL: string;
  address: {
    street: string;
    suit: string;
    city: string;
    postalCode: number;
  };
  primaryContact: {
    name: string;
    title: string;
    email: string;
  };
  createdAt: string;
  disabled: boolean;
  renderer: Renderer;
  members: {
    [key: string]: {
      role: Role;
      disabled: boolean;
    };
  };
}

// interface label configuration
export interface LabelConfig {
  height: number;
  width: number;
  unit: 'I' | 'M' | 'D' | 'C';
  mUnit: 'I' | 'M' | 'D';
  positionBy: 'O' | 'T';
  density: number;
  quantity: number;
  speed: number;
  darkness: number;
  flip: string[];
  desiredMode: string;
  prepeel: string;
}

// interface label
export interface Label {
  id?: string;
  name: string;
  description: string;
  parentFolderId: string;
  config: LabelConfig;
  workspace: string;
  zplCode: string;
  base64: string;
  isTrashed: boolean;
  createdAt: string;
  changedAt: string;
  trashedAt?: string;
}

// interface folder
export interface Folder {
  id?: string;
  name: string;
  description: string;
  parentFolderId: string;
  isTrashed: boolean;
  createdAt: string;
  changedAt: string;
  trashedAt?: string;
}
