interface AuthorInfoProps {
    name: string;
    role: string;
  }
  
  const AuthorInfo: React.FC<AuthorInfoProps> = ({ name, role }) => {
    return (
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold leading-6 text-white max-sm:text-lg">
          {name}
        </h3>
        <p className="text-sm leading-4 text-slate-500 max-sm:text-xs">{role}</p>
      </div>
    );
  };
  
  export default AuthorInfo;
  