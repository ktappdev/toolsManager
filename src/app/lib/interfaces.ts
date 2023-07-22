export interface iTool {
  id: string;
  toolCreatedDate: Date;
  toolDescription: string | null;
  toolImage: string | null;
  toolName: string;
  toolCategories: string[];
  toolSerialNumber: string | null;
  toolPurchaseDate: Date;
  toolBrand: string;
  toolCondition: string;
  toolAccessories: string[];
  toolModel: string | null;
  isToolAvailable: boolean | null;
  isToolDeleted: boolean | null;
  toolDeletedDate: Date | null;
  toolDeletedBy: string | null;
  isToolDamaged: boolean | null;
  toolDamagedDate: Date | null;
  toolDamagedBy: string | null;
  toolDamagedNotes: string | null;
  toolDamagedImage: string | null;
  toolLentOut: boolean | null;
  toolLentOutDate: Date | null;
  toolLentOutBy: string | null;
  toolLentOutNotes: string | null;
  toolLentOutTo: string | null;
  toolLentOutImage: string | null;
  toolReturned: boolean | null;
  toolReturnedDate: Date | null;
  toolReturnedBy: string | null;
  toolReturnedNotes: string | null;
  toolReturnedImage: string[] | null;
  toolReturnedTo: string[] | null;
  addedByUser: Users | null;
  addedByUserId: string | null;
  lentOutByUser: Users | null;
  lentOutByUserId: string | null;
  returnedByUser: Users | null;
  returnedByUserId: string | null;
}

export interface Users {
  id: string;
  username: string | null;
  email: string | null;
  nationalId: string | null;
  fullName: string | null;
  addedByUser: iTool[] | null;
  lentOutByUser: iTool[] | null;
  returnedByUser: iTool[] | null;
}
