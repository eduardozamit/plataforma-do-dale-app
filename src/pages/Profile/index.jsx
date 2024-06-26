import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStudentData } from "./api";
import Navbar from "../../components/Navbar";
import Tags from "../../components/Tags/Tags";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ProfileInfo,
  ProfileImage,
  Biography,
  Habilidades,
  Competencias,
  EducationLevel,
} from "./style";

export function Profile() {
  const [studentData, setStudentData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Novo estado
  const { studentId } = useParams();

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleStudentsClick = () => {
    navigate('/students');
  };


  useEffect(() => {
    fetchStudentData(studentId)
      .then((data) => setStudentData(data))
      .catch((error) =>
        console.error("Erro ao buscar dados do aluno:", error)
      );
  }, [studentId]);

  const toggleSidebar = () => { // Nova função
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!studentData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        showSearchInput={false}
        searchValue=""
        handleSearchChange={() => {}}
        handleEnterPress={() => {}}
        showRightMenu={false}
        toggleFilter={() => {}}
        handleHomeClick={handleHomeClick}
        handleStudentsClick={handleStudentsClick}
      />

      <Container>
        <ProfileInfo>
          <ProfileImage src={studentData.profilePicture} />
          <div>
            <h2>{studentData.name}</h2>
            <div>
              <p>
                <strong className="green">//</strong>
                <strong>Idade:</strong> {studentData.age} anos
              </p>
              <p>
                <strong className="green">//</strong>
                <strong>Trilha:</strong> {studentData.gcTrail}
              </p>
              <p>
                <strong className="green">//</strong>
                <strong>Cidade:</strong> {studentData.city}
              </p>
            </div>
          </div>
        </ProfileInfo>
        <Biography>
          <div>
            <h3>Biografia</h3>
            <div>
              <p>{studentData.biography}</p>
            </div>
          </div>
        </Biography>
        <EducationLevel>
          <div>
            <h3>Educação</h3>
            <div>
              <p>
                <strong>Graduação:</strong> {studentData.educationLevel}
              </p>
              <p>
                <strong>Curso:</strong> {studentData.course}
              </p>
              <p>
                <strong>Instituição:</strong>{" "}
                {studentData.courseInstitution}
              </p>
              <p>
                <strong>Conclusão:</strong>{" "}
                {studentData.yearOfCourseCompletion}
              </p>
            </div>
          </div>
        </EducationLevel>
        <Habilidades>
          <div>
            <h3>Hard Skills</h3>
            <div>
              {studentData.hardSkills.map((skill) => (
                <Tags key={skill.id}>{skill.description}</Tags>
              ))}
            </div>
          </div>
        </Habilidades>
        <Competencias>
          <div>
            <h3>Soft Skills</h3>
            <div>
              {studentData.softSkills.map((skill) => (
                <Tags key={skill.id}>{skill.description}</Tags>
              ))}
            </div>
          </div>
        </Competencias>
      </Container>
    </>
  );
}




