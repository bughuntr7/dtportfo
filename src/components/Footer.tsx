const Footer = () => {
    return (
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2">
              <span className="text-2xl font-bold text-primary">YH</span>
              <div className="w-1 h-6 bg-border"></div>
              <span className="text-foreground font-medium">Yassine Hamdi</span>
            </div>
            
            <p className="text-muted-foreground max-w-md mx-auto">
              MERN Stack Developer crafting modern web experiences with passion and precision.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Yassine Hamdi</span>
              <span>•</span>
              <span>Built with Next & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;