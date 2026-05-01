interface PropertyMapProps {
  address: string;
  city: string;
  state: string;
}

// Geocoding coordinates for real addresses (approximate)
const geocodedAddresses: { [key: string]: { lat: number; lon: number } } = {
  '1428 Elm Street, Springfield, IL': { lat: 39.7817, lon: -89.6501 },
  '742 Evergreen Terrace, Springfield, OR': { lat: 44.0462, lon: -122.9001 },
  '221B Baker Street, Atlanta, GA': { lat: 33.7490, lon: -84.3880 },
  '1600 Pennsylvania Avenue, Washington, DC': { lat: 38.8977, lon: -77.0365 },
  '350 Fifth Avenue, New York, NY': { lat: 40.7484, lon: -73.9857 },
  '1060 West Addison Street, Chicago, IL': { lat: 41.9474, lon: -87.6553 },
  '2640 Steiner Street, San Francisco, CA': { lat: 37.7989, lon: -122.4368 },
  '1313 Mockingbird Lane, Mockingbird Heights, CA': { lat: 33.7175, lon: -117.8311 },
  '344 Clinton Street, Brooklyn, NY': { lat: 40.6854, lon: -73.9951 },
  '4222 Clinton Way, Los Angeles, CA': { lat: 34.0522, lon: -118.2437 },
  '698 Candlewood Lane, Westport, CT': { lat: 41.1415, lon: -73.3579 },
  '1164 Morning Glory Circle, Westport, CT': { lat: 41.1415, lon: -73.3579 },
  '328 Chauncey Street, Brooklyn, NY': { lat: 40.6828, lon: -73.9101 },
  '623 East 68th Street, New York, NY': { lat: 40.7644, lon: -73.9632 },
  '1882 Gerard Avenue, Bronx, NY': { lat: 40.8448, lon: -73.9182 },
  '129 West 81st Street, New York, NY': { lat: 40.7851, lon: -73.9753 },
  '714 Delaware Street, Lawrence, KS': { lat: 38.9717, lon: -95.2353 },
  '430 Elm Street, Seattle, WA': { lat: 47.6062, lon: -122.3321 },
  '4222 Sunset Boulevard, Los Angeles, CA': { lat: 34.0900, lon: -118.2900 },
  '2311 North Los Robles Avenue, Pasadena, CA': { lat: 34.1614, lon: -118.1454 },
};

export function PropertyMap({ address, city, state }: PropertyMapProps) {
  const fullAddress = `${address}, ${city}, ${state}`;
  const coords = geocodedAddresses[fullAddress] || { lat: 39.8283, lon: -98.5795 }; // Default to center of US
  
  // Using OpenStreetMap iframe embed
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lon - 0.01},${coords.lat - 0.01},${coords.lon + 0.01},${coords.lat + 0.01}&layer=mapnik&marker=${coords.lat},${coords.lon}`;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        title={`Map showing ${fullAddress}`}
        className="border-0"
      />
      <div className="text-xs text-gray-600 text-center mt-1">
        <a 
          href={`https://www.openstreetmap.org/?mlat=${coords.lat}&mlon=${coords.lon}#map=15/${coords.lat}/${coords.lon}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
}
