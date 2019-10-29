export interface IProject {
  _id?: string;
  name: string;
  author?: string;
  url_avatar?: string;
  isPrivate?: boolean;
  subscribes?: ISub[];
};

export interface ISub {
  _id: string;
  user_id: string;
  user_status: number;
  project: string;
}
