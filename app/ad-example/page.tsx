import AdUnit from '../../components/AdUnit';

export const metadata = {
  title: 'Ad Example Page',
  description: 'Example page showing how to implement Google AdSense ads',
};

export default function AdExamplePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">AdSense Implementation Example</h1>
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Sample Content</h2>
        <p className="text-aether-mist mb-4">
          This is an example page showing how to implement Google AdSense ads in your Next.js application.
          The AdUnit component can be placed anywhere in your pages to display ads.
        </p>
        
        <p className="text-aether-mist mb-4">
          Make sure to replace the placeholder ad slot IDs with your actual AdSense ad slot IDs.
          You can create these in your AdSense dashboard.
        </p>
      </div>
      
      {/* Leaderboard ad example */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-white mb-3">Leaderboard Ad</h3>
        <AdUnit 
          slot="1234567890" 
          format="horizontal" 
          className="min-h-[90px] bg-gray-800 rounded-lg flex items-center justify-center"
        />
        <p className="text-sm text-aether-mist mt-2 text-center">
          This is a placeholder for a leaderboard ad (728x90)
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Content Section 1</h3>
          <p className="text-aether-mist mb-4">
            This is a content section that would normally appear on your website.
            You can place ads between content sections for better user experience.
          </p>
          
          {/* Square ad example */}
          <div className="mt-6">
            <h4 className="text-md font-medium text-white mb-3">Square Ad</h4>
            <AdUnit 
              slot="0987654321" 
              format="square" 
              className="min-h-[250px] bg-gray-800 rounded-lg flex items-center justify-center"
            />
            <p className="text-sm text-aether-mist mt-2 text-center">
              This is a placeholder for a square ad (300x250)
            </p>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Content Section 2</h3>
          <p className="text-aether-mist mb-4">
            Another content section where you might want to place ads.
            Make sure to follow AdSense policies and provide value to your users.
          </p>
          
          <p className="text-aether-mist mb-4">
            Remember to test your ads in development but only show real ads in production
            to avoid policy violations.
          </p>
        </div>
      </div>
      
      {/* Footer ad example */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-white mb-3">Footer Ad</h3>
        <AdUnit 
          slot="1122334455" 
          format="horizontal" 
          className="min-h-[90px] bg-gray-800 rounded-lg flex items-center justify-center"
        />
        <p className="text-sm text-aether-mist mt-2 text-center">
          This is a placeholder for a footer ad
        </p>
      </div>
    </div>
  );
}