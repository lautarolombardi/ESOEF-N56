export interface Competition {
  id: string;
  title: string;
  description: string;
  media: string[];
  mediaType: "image" | "video";
  date: string;
  link: string;
}
