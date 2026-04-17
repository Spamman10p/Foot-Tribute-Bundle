import React, { useState } from 'react';
import { 
  Home, Bell, Mail, Bookmark, User, MoreHorizontal, 
  Heart, MessageCircle, Share2, Lock, 
  CheckCircle, ShieldCheck, ExternalLink, Search
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const contractAddress = "HD9Z3cKkQ5NoZVvHDkjBDh1spXSFVM8UuzBckxwupump";
  const xCommunity = "https://x.com/i/communities/2037190774824026585";

  const posts = [
    { id: 1, type: 'public', img: '/assets/bundle5.png', likes: '5.1k', comments: '310', date: '5h ago' },
    { id: 2, type: 'public', img: '/assets/bundle6.png', likes: '12.4k', comments: '840', date: '8h ago' },
    { id: 3, type: 'public', img: '/assets/bundle2.png', likes: '1.2k', comments: '88', date: '1d ago' },
    { id: 4, type: 'public', img: '/assets/bundle7.png', likes: '18.9k', comments: '1.2k', date: '2d ago' },
    { id: 5, type: 'public', img: '/assets/bundle3.png', likes: '3.9k', comments: '205', date: '3d ago' },
    { id: 6, type: 'public', img: '/assets/bundle8.png', likes: '25.6k', comments: '2.1k', date: '4d ago' },
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1 style={{ color: 'var(--of-blue)', fontSize: '28px', fontWeight: '900', trackingTighter: '-0.05em' }}>Only Foot</h1>
        </div>
        
        <nav className="nav-list">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Bell, label: 'Notifications' },
            { icon: Mail, label: 'Messages' },
            { icon: Bookmark, label: 'Bookmarks' },
            { icon: Search, label: 'Explore' },
            { icon: User, label: 'Profile' },
            { icon: MoreHorizontal, label: 'More' },
          ].map((item, i) => (
            <a key={i} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={26} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <button className="subscribe-btn" style={{ marginTop: '20px', width: '100%' }}>
          NEW TRIBUTE
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header-top">
          <div style={{ fontWeight: '800', fontSize: '19px' }}>Archer Queen</div>
        </div>

        <div className="profile-banner">
          <img src="/assets/bundle4.png" alt="Banner" />
        </div>

        <div className="profile-avatar-container">
          <div className="avatar">
            <img src="/assets/hero.png" alt="Archer Queen Avatar" />
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="profile-info">
          <div className="profile-name-row">
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Archer Queen</h2>
            <CheckCircle className="verified-badge" size={20} fill="currentColor" />
          </div>
          <div className="handle">@archer_queen</div>
          
          <div className="bio">
            The only official destination for Archer Queen tributes. 👸✨
            👑 100% Cultured Content
            💎 Holder of the Foot Crown
            🚀 To the moon on Pump.fun
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
            <div style={{ fontSize: '14px' }}><span style={{ fontWeight: '800' }}>8</span> <span style={{ color: 'var(--of-text-secondary)' }}>Posts</span></div>
            <div style={{ fontSize: '14px' }}><span style={{ fontWeight: '800' }}>45k</span> <span style={{ color: 'var(--of-text-secondary)' }}>Likes</span></div>
          </div>
        </div>

        <div className="tabs-row">
          <button className="tab active">POSTS</button>
          <button className="tab">MEDIA</button>
          <button className="tab">LINKS</button>
        </div>

        {/* Feed */}
        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="post-avatar">
                  <img src="/assets/hero.png" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '15px' }}>
                    Archer Queen <CheckCircle className="verified-badge" size={14} fill="currentColor" />
                  </div>
                  <div style={{ color: 'var(--of-text-secondary)', fontSize: '13px' }}>{post.date}</div>
                </div>
              </div>

              <div className="post-content">
                <img src={post.img} className="post-image" alt="Post" />
                
                {post.type === 'locked' && (
                  <div className="paywall">
                    <Lock size={48} className="paywall-icon" />
                    <h3 style={{ fontSize: '18px', fontWeight: '800' }}>Locked Tribute</h3>
                    <p style={{ fontSize: '14px', marginTop: '4px' }}>Subscribe or hold $FOOT to unlock</p>
                    <button className="subscribe-btn">Unlock for {post.price}</button>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
                <div className="flex items-center gap-4" style={{ color: 'var(--of-text-secondary)' }}>
                  <Heart size={24} />
                  <MessageCircle size={24} />
                  <Share2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="card">
          <h2 className="card-title">Subscription</h2>
          <div style={{ color: 'var(--of-text-secondary)', fontSize: '14px', marginBottom: '12px' }}>
            Get access to all premium Archer Queen tributes.
          </div>
          <button className="subscribe-btn" style={{ width: '100%', padding: '15px' }}>SUBSCRIBE FOR FREE</button>
          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px', color: 'var(--of-text-secondary)' }}>
            EXCLUSIVE FOR $FOOT HOLDERS
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Contract Access</h2>
          <div style={{ fontSize: '12px', color: 'var(--of-text-secondary)' }}>SOLANA ADDRESS</div>
          <div className="sol-address">{contractAddress}</div>
          <button 
            className="edit-profile-btn" 
            style={{ width: '100%', marginTop: '10px', fontSize: '13px' }}
            onClick={() => window.open(xCommunity, '_blank')}
          >
            JOIN X COMMUNITY
          </button>
        </div>

        <div style={{ padding: '16px', fontSize: '12px', color: 'var(--of-text-secondary)' }}>
          © 2026 ONLYFOOT
          <br />
          All rights reserved to the Archer Queen.
        </div>
      </aside>
    </div>
  );
};

export default App;
