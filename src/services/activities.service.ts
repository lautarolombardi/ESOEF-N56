import { db } from "@/config/firebase.config";
import { COLLECTIONS } from "@/constants/collections.constants";
import type { Activity as ActivityType } from "@/types/activities";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export class Activity {
  private collectionRef = collection(db, COLLECTIONS.ACTIVITIES);

  async getAll(): Promise<ActivityType[]> {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ActivityType[];
    } catch (error) {
      console.error("Error al obtener las actividadesss:", error);
      throw new Error("No se pudieron obtener las actividades.");
    }
  }

  async add(activity: Omit<ActivityType, "id">): Promise<void> {
    try {
      await addDoc(this.collectionRef, activity);
    } catch (error) {
      console.error("Error al agregar la actividad:", error);
      throw new Error("No se pudo agregar la actividad.");
    }
  }

  async update(id: string, updates: Partial<ActivityType>): Promise<void> {
    try {
      const activityDoc = doc(this.collectionRef, id);
      await updateDoc(activityDoc, updates);
    } catch (error) {
      console.error("Error al actualizar la actividad:", error);
      throw new Error("No se pudo actualizar la actividad.");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const activityDoc = doc(this.collectionRef, id);
      await deleteDoc(activityDoc);
    } catch (error) {
      console.error("Error al eliminar la actividad:", error);
      throw new Error("No se pudo eliminar la actividad.");
    }
  }
}
