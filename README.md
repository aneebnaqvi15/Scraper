# Twitter Scraper Dashboard

A modern, feature-rich Twitter data collection and analysis dashboard built with Next.js and TypeScript.

## Features

- **Advanced Query Builder**: Create complex Twitter search queries with boolean operators and filters
- **Data Collection**: Gather tweets, user data, engagement metrics, and location information
- **Real-time Analytics**: Monitor scraping progress and view insights
- **Interactive Dashboard**: Beautiful UI with real-time updates and animations
- **Data Export**: Export collected data in multiple formats (JSON, CSV, Excel)
- **Sentiment Analysis**: Automatic sentiment classification of tweets
- **Location Tracking**: Collect and analyze location data from tweets and user profiles

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd twitter-scraper-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── app/
  │   ├── (dashboard)/
  │   │   ├── dashboard/   # Main dashboard page
  │   │   ├── scrape/      # Scrape configuration page
  │   │   └── results/     # Results and analysis page
  │   └── layout.tsx       # Root layout
  └── components/          # Shared components
```

## License

MIT 