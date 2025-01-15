import { IUser } from "../user";

export type UserContractApprovedStatuses = "pending" | "approved" | "rejected";

export interface IUserContractApproval {
  user: IUser;
  approvedStatus: UserContractApprovedStatuses;
  createdAt: string;
}

export interface IContractComment {
  id: number;
  comment: string;
  user: IUser;
  createdAt: string;
}

export interface IContractItem {
  id: number;
  content: string;
  approvals: IUserContractApproval[];
  comments: IContractComment[];
  commentsCount: number;
}

export interface IContract {
  id: number;
  title: string;
  items: IContractItem[];
  createdAt: string;
}
