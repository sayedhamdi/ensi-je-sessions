export default function Navbar(){
    return (
        <nav className="navbar" style={{display:'flex', justifyContent:'space-around',alignItems:'center',fontSize:'30px',boxShadow:'4px 8px 16px gray'}}>
        <h1>News</h1>
        <div className="links" style={{display:'flex',gap:'40px'}}>
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
        </nav>
    );
}