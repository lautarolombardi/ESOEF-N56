export interface Activity {
  id: string;
  title: string;
  description: string;
  media: string | string[];
  media_type?: "image" | "video";
  social_media_post?: string;
  date: string;
}
