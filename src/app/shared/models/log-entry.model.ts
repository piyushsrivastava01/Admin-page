export type LogLevel = 'info' | 'warning' | 'success';

export interface LogEntry {
  id: number;
  level: LogLevel;
  title: string;
  description: string;
  by: string;
  timestamp: string; // ISO string or formatted date
}
