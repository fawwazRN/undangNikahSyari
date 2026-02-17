
-- Create RSVP table for wedding guest messages
CREATE TABLE public.rsvp (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nama TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('hadir', 'ragu', 'tidak_hadir')),
  jumlah_tamu INTEGER NOT NULL DEFAULT 1,
  pesan TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rsvp ENABLE ROW LEVEL SECURITY;

-- Everyone can read messages (public guestbook)
CREATE POLICY "Anyone can read RSVP messages"
  ON public.rsvp FOR SELECT
  USING (true);

-- Anyone can insert (no auth required for wedding RSVP)
CREATE POLICY "Anyone can submit RSVP"
  ON public.rsvp FOR INSERT
  WITH CHECK (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.rsvp;
