ALTER TABLE cc_files DROP COLUMN IF EXISTS track_type;

DROP TABLE IF EXISTS "cc_track_types" CASCADE;
