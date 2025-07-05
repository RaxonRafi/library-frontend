export const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div
        className="max-w-7xl mx-auto px-4 py-0 text-center text-xs text-muted-foreground leading-none"
        style={{ height: '30px', lineHeight: '30px' }}
      >
        © {new Date().getFullYear()} YourLib. All rights reserved.
      </div>
    </footer>
  );
};