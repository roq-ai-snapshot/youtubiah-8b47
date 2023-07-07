import { CommentInterface } from 'interfaces/comment';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  description?: string;
  url: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    comment?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  url?: string;
  organization_id?: string;
  user_id?: string;
}
