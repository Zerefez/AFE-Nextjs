// Types for workout programs and exercises management

export interface Exercise {
  exerciseId: number;
  groupId?: string;
  name: string | null;
  description: string | null;
  sets: number | null;
  repetitions: number | null;
  time: string | null;
  workoutProgramId?: number | null;
  personalTrainerId?: number | null;
}

export interface ExerciseFormData {
  name: string;
  description: string;
  sets: string;
  repetitions: string;
  time: string;
}

export interface ExerciseManagerProps {
  programId: number;
  initialExercises: Exercise[];
}

export interface ExerciseCardProps {
  exercise: Exercise;
  isEditing: boolean;
  formData: ExerciseFormData;
  loading: boolean;
  onEdit: (exercise: Exercise) => void;
  onDelete: (id: number) => void;
  onSave: (id: number) => void;
  onCancel: () => void;
  onFormChange: (data: ExerciseFormData) => void;
}

export interface ExerciseFormProps {
  formData: ExerciseFormData;
  loading: boolean;
  title?: string;
  onSave: () => void;
  onCancel: () => void;
  onFormChange: (data: ExerciseFormData) => void;
}

export interface ProgramHeaderProps {
  programId: number;
  initialProgram: any;
  clients: any[];
  assignedClient: any;
}

export interface ProgramActionsProps {
  programId: number;
  program: any;
  clients: any[];
  onUpdate?: (updatedProgram: any) => void;
}

