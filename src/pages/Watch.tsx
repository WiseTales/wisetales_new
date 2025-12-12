
import React, { useState } from 'react';
import { Play, Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Watch = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const values = ['all', 'honesty', 'hope', 'respect', 'sharing', 'sincerity', 'cleanliness', 'courage', 'patience', 'kindness'];

const stories = [
  {
    id: 1,
    title: 'The Haunted Madrasa',
    description: 'A thrilling adventure story teaching courage and wisdom.',
    value: 'courage',
    duration: '2:46',
    views: '—',
    thumbnail: 'haunted-madrasa',
    link: 'https://youtu.be/UdMTuhxqxFE'
  },
  {
    id: 2,
    title: 'Zayn Ki Seekh',
    description: 'Zayn\'s journey of cleanliness, manners, and responsibility told through heartwarming animation.',
    value: 'cleanliness',
    duration: '4:13',
    views: '—',
    thumbnail: 'zayn-ki-seekh',
    link: 'https://youtu.be/NMfLezIc7e4'
  },
  {
    id: 3,
    title: 'The Gift of Respect',
    description: 'A beautiful 3D story about respecting elders, neighbors, and community.',
    value: 'respect',
    duration: '1:39',
    views: '—',
    thumbnail: 'gift-of-respect',
    link: 'https://youtu.be/0AsWt7p_754'
  },
  {
    id: 4,
    title: 'Sabse Meetha Aam',
    description: 'Two brothers learn the value of sharing through a sweet and surprising mango story.',
    value: 'sharing',
    duration: '1:51',
    views: '—',
    thumbnail: 'sabse-meetha-aam',
    link: 'https://youtu.be/HViK58JKUK8'
  },
  {
    id: 5,
    title: 'The Mirror of Intentions',
    description: 'An animated tale teaching the power of sincerity in our actions.',
    value: 'sincerity',
    duration: '1:46',
    views: '—',
    thumbnail: 'mirror-of-intentions',
    link: 'https://youtu.be/RtLcez7_4jc'
  },
  {
    id: 6,
    title: 'Honest Hearts',
    description: 'A moral story about the importance of honesty, trust, and doing the right thing.',
    value: 'honesty',
    duration: '1:36',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://youtu.be/b2sKV_XxMv4'
  },
  {
    id: 7,
    title: 'The Quiet Boy in Class',
    description: 'Watch this inspiring moral story about respect, kindness, and believing in others',
    value: 'respect',
    duration: '1:34',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://www.youtube.com/watch?v=ek6vImJqhYA'
  },
  {
    id: 8,
    title: 'Milo the Monkeys Banana Lesson',
    description: 'Milo was proud of being the fastest banana picker in the jungle. But when he rushed to gather bananas for the picnic, he learned a big lesson—speed isn’t always success!',
    value: 'patience',
    duration: '2:15',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://www.youtube.com/watch?v=7mxOzhNIxaE'
  },
  {
    id: 9,
    title: 'Lulu and the Lost Smile',
    description: 'Meet Lulu, a cheerful bunny who suddenly loses her smile! With the help of her friends Toto the Turtle, Mimi the Bird, and her loving Grandma Bunny, she learns that happiness doesn’t come from outside—it comes from kindness, love, and sharing.',
    value: 'kindness', 'sharing',
    duration: '2:43',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://www.youtube.com/watch?v=-OCJVeNHSMM'
  },
  {
    id: 10,
    title: 'A Little Drop',
    description: '“A Little Drop” is a heart-touching short story that reminds us: no act of goodness is ever too small.',
    value: 'hope', 'kindness',
    duration: '2:24',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://youtu.be/VGVkFvgcJGc?si=wpau5UfxsAQRuOrk'
  },
   {
    id: 11,
    title: 'The Magic Feather',
    description: '“The Magic Feather” is a touching and inspiring short story about self-belief, courage, and discovering the magic within.',
    value: 'hope', 'courage',
    duration: '3:29',
    views: '—',
    thumbnail: 'honest-hearts',
    link: 'https://www.youtube.com/watch?v=8XDaItRuw00'
  }
  
  
  
];

const getYouTubeId = (url) => {
  const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

const filteredStories = selectedFilter === 'all'
  ? stories
  : stories.filter(story => story.value === selectedFilter);

return (
  <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
    <Navbar />

    {/* Hero Section */}
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
          Watch Our Stories
        </h1>
        <p className="text-xl text-sage-600 max-w-3xl mx-auto mb-8">
          Discover beautiful moral tales that inspire young hearts. 
          Each story carries a powerful lesson wrapped in love and wonder.
        </p>
      </div>
    </section>

    {/* Filter Section */}
    <section className="pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {values.map((value) => (
            <Button
              key={value}
              variant={selectedFilter === value ? "default" : "outline"}
              onClick={() => setSelectedFilter(value)}
              className={`capitalize ${
                selectedFilter === value
                  ? 'bg-sage-600 hover:bg-sage-700'
                  : 'border-sage-300 text-sage-600 hover:bg-sage-50'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {value === 'all' ? 'All Stories' : value}
            </Button>
          ))}
        </div>
      </div>
    </section>

    {/* Stories Grid */}
    <section className="pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <Card key={story.id} className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-mint-200 to-sage-200 rounded-t-lg overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeId(story.link)}/hqdefault.jpg`}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-sage-700">
                    {story.duration}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-sage-700">
                    {story.views} views
                  </div>
                  <div className="absolute bottom-3 left-3 bg-gold-500/90 rounded-full px-3 py-1 text-xs font-medium text-white capitalize">
                    {story.value}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sage-800 mb-3 group-hover:text-sage-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sage-600 text-sm mb-4 line-clamp-3">
                    {story.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-sage-600 hover:bg-sage-700">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </a>
                    <Button size="sm" variant="ghost" className="text-sage-600 hover:text-sage-800">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

   
    <Footer />
  </div>
);
};

export default Watch;

  
  
