function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <BrandIntroduction />
        <BrandPersonality />
        <Features />
        <ProductShowcase />
        <Goals />
        <MascotGuide />
        <NoJudgement />
        <HowItWorks />
        <ProductProof />
        <FinalCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<LandingPage />);
