-- Initialize the portfolio database

-- Table for contact messages
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for technologies/skills
CREATE TABLE IF NOT EXISTS technologies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL, -- e.g., 'Frontend', 'Backend', 'Database'
    icon_class VARCHAR(100), -- CSS class for icon (e.g., 'fab fa-angular')
    proficiency_level INTEGER CHECK (proficiency_level BETWEEN 1 AND 100),
    display_order INTEGER DEFAULT 0
);

-- Table for work experience
CREATE TABLE IF NOT EXISTS experiences (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    company VARCHAR(150) NOT NULL,
    location VARCHAR(100),
    start_date DATE NOT NULL,
    end_date DATE, -- Null means 'Present'
    description TEXT NOT NULL,
    is_current BOOLEAN DEFAULT FALSE,
    display_order INTEGER DEFAULT 0
);

-- Table for personal/professional goals
CREATE TABLE IF NOT EXISTS goals (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('personal', 'professional')),
    display_order INTEGER DEFAULT 0
);

-- Insert some dummy data to verify
INSERT INTO technologies (name, category, proficiency_level, display_order) VALUES
('Angular', 'Frontend', 90, 1),
('TypeScript', 'Frontend', 85, 2),
('Node.js', 'Backend', 80, 3),
('PostgreSQL', 'Database', 75, 4);

INSERT INTO experiences (title, company, start_date, is_current, description, display_order) VALUES
('Fullstack Developer', 'Tech Company', '2023-01-01', TRUE, 'Desarrollo de aplicaciones web utilizando Angular y Node.js.', 1),
('Frontend Developer', 'Web Agency', '2021-06-01', FALSE, 'Creación de interfaces de usuario modernas.', 2);

INSERT INTO goals (title, description, type, display_order) VALUES
('Aprender Arquitectura Cloud', 'Obtener certificación en AWS o Google Cloud.', 'professional', 1),
('Mejorar nivel de inglés', 'Alcanzar el nivel C1 para final de año.', 'personal', 1);
