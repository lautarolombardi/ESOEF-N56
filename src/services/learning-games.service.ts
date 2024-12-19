import { db } from "@/config/firebase.config";
import { COLLECTIONS } from "@/constants/collections.constants";
import type { LearningGame as LearningGameType } from "@/types/learning-games";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export class LearningGame {
  private collectionRef = collection(db, COLLECTIONS.LEARNING_GAMES);

  async getAll(): Promise<LearningGameType[]> {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as LearningGameType[];
    } catch (error) {
      console.error("Error al obtener los juegos de aprendizaje:", error);
      throw new Error("No se pudieronlos juegos de aprendizaje.");
    }
  }

  async add(activity: Omit<LearningGameType, "id">): Promise<void> {
    try {
      await addDoc(this.collectionRef, activity);
    } catch (error) {
      console.error("Error al obtener los juegos de aprendizaje:", error);
      throw new Error("No se pudieronlos juegos de aprendizaje.");
    }
  }

  async update(id: string, updates: Partial<LearningGameType>): Promise<void> {
    try {
      const learningGameDoc = doc(this.collectionRef, id);
      await updateDoc(learningGameDoc, updates);
    } catch (error) {
      console.error("Error al obtener los juegos de aprendizaje:", error);
      throw new Error("No se pudieronlos juegos de aprendizaje.");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const learningGameDoc = doc(this.collectionRef, id);
      await deleteDoc(learningGameDoc);
    } catch (error) {
      console.error("Error al obtener los juegos de aprendizaje:", error);
      throw new Error("No se pudieronlos juegos de aprendizaje.");
    }
  }
}
