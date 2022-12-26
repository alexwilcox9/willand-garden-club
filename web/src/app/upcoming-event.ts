export class UpcomingEvent {
  name: string;
  date: string;
  time: string;
  description: string;
  icon: 'coffee' | 'leaf' | 'landmark' | 'store' | 'film' | 'calendar-day';
  location?: string;
  price?: string;
  contact?: string;
}
