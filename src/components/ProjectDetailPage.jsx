
  const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch project data based on ID
    fetchProjectData(id);
  }, [id]);

  const fetchProjectData = async (projectId) => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch(`/api/projects/${projectId}`);
      
      if (!response.ok) {
        throw new Error('Project not found');
      }

      const data = await response.json();
      setProject(data);
      
      // Fetch related projects
      fetchRelatedProjects(data.category);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProject(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProjects = async (category) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/projects?category=${category}&limit=5`);
      const data = await response.json();
      setRelatedProjects(data.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error fetching related projects:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
            <p className="text-grey-80">Loading project details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-grey-100 mb-2">Project Not Found</h1>
            <p className="text-grey-80 mb-6">{error || 'The project you are looking for does not exist.'}</p>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-2 bg-brand hover:bg-brand/90 text-grey-30 text-sm font-semibold rounded transition-colors"
            >
              Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Projects', href: '/projects', active: false },
    { label: project.title, href: `#`, active: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Image Gallery */}
          <div className="mb-6">
            <ImageGallery 
              images={project.images || []} 
              totalCount={project.totalImages || 0}
            />
          </div>

          {/* Main Content: Project Details + Sidebar */}
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-1">
              <ProjectDetails 
                specifications={project.specifications}
                description={project.description}
              />
            </div>
            
            <ProjectSidebar 
              project={project}
              company={project.company}
            />
          </div>

          {/* Other Projects Section */}
          {relatedProjects && relatedProjects.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium text-grey-100">Other Projects</h2>
              <div className="flex items-start gap-4 overflow-x-auto pb-2">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="no-underline"
                  >
                    <ProjectCard project={relatedProject} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
