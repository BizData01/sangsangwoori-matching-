-- ============================================================
-- 상상우리 — 시니어 일자리 매칭 시스템 스키마
-- ============================================================

-- seniors
create table if not exists seniors (
  id           uuid primary key default gen_random_uuid(),
  name         text        not null,
  region       text        not null,
  desired_job  text        not null,
  career_years integer     not null default 0,
  created_at   timestamptz not null default now()
);

-- jobs
create table if not exists jobs (
  id               uuid primary key default gen_random_uuid(),
  title            text        not null,
  region           text        not null,
  job_type         text        not null,
  required_career  integer     not null default 0,
  created_at       timestamptz not null default now()
);

-- matches
create table if not exists matches (
  id         uuid primary key default gen_random_uuid(),
  senior_id  uuid        not null references seniors (id) on delete cascade,
  job_id     uuid        not null references jobs    (id) on delete cascade,
  score      integer     not null default 0,
  created_at timestamptz not null default now()
);

-- ============================================================
-- RLS (학습 환경 전용 — 실서비스에서는 정책 재설계 필수)
-- ============================================================
alter table seniors disable row level security;
alter table jobs    disable row level security;
alter table matches disable row level security;

-- 샘플 데이터 (선택)
insert into jobs (title, region, job_type, required_career) values
  ('경비원',   '서울 강남구',  '경비',   0),
  ('청소원',   '서울 마포구',  '청소',   0),
  ('사무보조', '경기 성남시',  '사무',   2),
  ('주차관리', '인천 남동구',  '경비',   1)
on conflict do nothing;
