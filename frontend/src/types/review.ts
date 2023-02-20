export interface Review {
  created_at: string;
  assignment_id: number;
  spaced_repetition_system_id: number;
  subject_id: number;
  starting_srs_stage: number;
  ending_srs_stage: number;
  incorrect_meaning_answers: number;
  incorrect_reading_answers: number;
}
