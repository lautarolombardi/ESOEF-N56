import { db } from "@/config/firebase.config";
import { COLLECTIONS } from "@/constants/collections.constants";
import type { StudyMaterial as StudyMaterialType } from "@/types/study-material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export class StudyMaterialClass {
  private collectionRef = collection(db, COLLECTIONS.STUDY_MATERIAL);

  async getAll(): Promise<StudyMaterialType[]> {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      })) as StudyMaterialType[];
    } catch (error) {
      console.error("Error al obtener el material de estudio:", error);
      throw new Error("No se pudo obtener el material de estudio.");
    }
  }

  async add(studyMaterial: Omit<StudyMaterialType, "id">): Promise<void> {
    try {
      await addDoc(this.collectionRef, studyMaterial);
    } catch (error) {
      console.error("Error al agregar el material de estudio:", error);
      throw new Error("No se pudo agregar el material de estudio.");
    }
  }

  async update(id: string, updates: Partial<StudyMaterialType>): Promise<void> {
    try {
      const studyMaterialDoc = doc(this.collectionRef, id);
      await updateDoc(studyMaterialDoc, updates);
    } catch (error) {
      console.error("Error al actualizar el material de estudio:", error);
      throw new Error("No se pudo actualizar el material de estudio.");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const studyMaterialDoc = doc(this.collectionRef, id);
      await deleteDoc(studyMaterialDoc);
    } catch (error) {
      console.error("Error al eliminar el material de estudio:", error);
      throw new Error("No se pudo eliminar el material de estudio.");
    }
  }
}
