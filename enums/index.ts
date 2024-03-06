// types of user those are in system
export enum AccountType {
  USER = 'user',
  SUPER_USER = 'super_user',
}

// firestore collection names
export enum FirestoreCollection {
  USERS = 'users',
  ORGANIZATIONS = 'organizations',
  FOLDERS = 'folders',
  LABELS = 'labels',
}

// renderer
export enum Renderer {
  LABELARY = 'labelary',
  NEO_DYNAMIC = 'neo_dynamic',
}

// role of user in organization
export enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
}

// titles
export enum Title {
  Mr = 'Mr.',
  Mrs = 'Mrs.',
  Ms = 'Ms.',
  Miss = 'Miss',
  Dr = 'Dr.',
}
