'use client'

import { useMemo, useState } from 'react'

const channels = [
  { name: 'VTV1 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv1/index.m3u8' },
  { name: 'VTV2 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv2/index.m3u8' },
  { name: 'VTV3 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv3/index.m3u8' },
  { name: 'VTV4 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv4/index.m3u8' },
  { name: 'VTV5 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv5/index.m3u8' },
  { name: 'VTV8 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv8/index.m3u8' },
  { name: 'VTV9 HD', group: 'Kênh VTV', url: 'https://dethich.pw/vtv9/index.m3u8' },
  { name: 'Vietnam Today', group: 'Kênh VTV', url: 'https://amagi-live.ondemandkorea.com/amgplt0456.m3u8' },
]

export default function Home() {
  const [selected, setSelected] = useState(channels[0])
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => channels.filter((channel) => channel.name.toLowerCase().includes(query.toLowerCase())), [query])
  return <main>
    <header><div className="brand"><span className="dot" />TV360 <small>VIETNAM</small></div><span className="status">● LIVE TV</span></header>
    <section className="hero"><p className="eyebrow">TRỰC TUYẾN</p><h1>Xem truyền hình<br /><em>Việt Nam</em></h1><p className="intro">Danh sách kênh trực tiếp được tuyển chọn cho trải nghiệm xem nhanh và ổn định.</p></section>
    <section className="player" aria-label="Trình phát kênh"><div className="screen"><div className="play">▶</div><div className="screen-label">{selected.name}<span>Đang phát</span></div></div><div className="player-info"><div><p>ĐANG XEM</p><h2>{selected.name}</h2></div><a href={selected.url} target="_blank" rel="noreferrer">Mở luồng ↗</a></div></section>
    <section className="channels"><div className="section-head"><div><p className="eyebrow">DANH SÁCH KÊNH</p><h2>Chọn kênh để xem</h2></div><input aria-label="Tìm kiếm kênh" placeholder="Tìm kênh..." value={query} onChange={(event) => setQuery(event.target.value)} /></div><div className="grid">{filtered.map((channel, index) => <button className={selected.name === channel.name ? 'channel active' : 'channel'} key={channel.name} onClick={() => setSelected(channel)}><span className="number">{String(index + 1).padStart(2, '0')}</span><span><strong>{channel.name}</strong><small>{channel.group}</small></span><span className="arrow">↗</span></button>)}</div></section>
    <footer>TV360 Vietnam <span>•</span> Nội dung phát trực tuyến từ các nguồn công khai</footer>
  </main>
}
