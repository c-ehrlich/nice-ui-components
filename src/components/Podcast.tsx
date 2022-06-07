import s from '../css/Podcast.module.css';
import {
  Bookmark,
  BrandSoundcloud,
  Check,
  ChevronLeft,
  Dots,
  Menu2,
  PlayerPlay,
  Search,
} from 'tabler-icons-react';
import BlurBG from '../static/BlurBG.jpg';
import PodcastIcon from '../static/PodcastIcon.jpg';
import { useState } from 'react';
import { PastEpisode, pastEpisodesData } from '../data/podcasts';
import { classes } from '../utils/classes';
import { useViewportSize } from '@mantine/hooks';

function Podcast() {
  const [pastEpisodes, setPastEpisodes] =
    useState<PastEpisode[]>(pastEpisodesData);
  const [subscribed, setSubscribed] = useState<boolean>(true);

  function toggleBookmarked(index: number) {
    setPastEpisodes([
      ...pastEpisodes.slice(0, index),
      { ...pastEpisodes[index], bookmarked: !pastEpisodes[index].bookmarked },
      ...pastEpisodes.slice(index + 1),
    ]);
  }
  return (
    <div className={s.container}>
      <div className={s.menuBarContainer}>
        <MenuBar />
      </div>
      <div
        className={s.titleGridBG}
        style={{ backgroundImage: `url(${BlurBG})` }}
      >
        <div className={s.titleGrid}>
          <img src={PodcastIcon} alt='Podcast Icon' className={s.icon} />
          <div className={s.title}>Weekend Hackers</div>
          <div className={s.author}>Frederick Libeskind</div>
          <div className={subscribed ? s.pill : classes([s.pill, s.pillNotSubscribed])} onClick={() => setSubscribed((val) => !val)}>
            {subscribed ? (
              <>
                <div className={s.pillText}>Subscribed</div>
                <Check size={14} className={s.pillCheck} />
              </>
            ) : (
              <div className={s.pillText}>Subscribe</div>
            )}
          </div>
        </div>
      </div>
      <div className={s.episodesContainer}>
        <div className={s.newestEpisode}>
          <div className={s.playButtonOuter}>
            <div className={s.playButtonInner}>
              <PlayerPlay size={16} className={s.playButtonIcon} />
            </div>
          </div>
          <div className={s.play}>Play</div>
          <div className={s.newestEpisodeTitle}>Ep. 101: Donald Long</div>
          <Dots size={32} className={s.dots} />
        </div>
        <div className={s.pastEpisodesTitle}>Past Episodes</div>
        {pastEpisodes.map((e, i) => (
          <div className={s.episode}>
            <div className={s.episodeData}>
              <div className={s.episodeDate}>{e.date}</div>
              <div className={s.episodeTitle}>{e.title}</div>
              <div className={s.episodeDuration}>{e.duration}</div>
            </div>
            <Bookmark
              onClick={() => toggleBookmarked(i)}
              size={28}
              className={
                e.bookmarked
                  ? classes([s.episodeBookmark, s.isBookmarked])
                  : s.episodeBookmark
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuBar() {
  const { width } = useViewportSize();

  return (
    <div className={s.menuBarInner}>
      {width <= 500 ? (
        <>
          <ChevronLeft size={30} className={s.hamburgerButton} />
          <BrandSoundcloud size={40} className={s.appLogo} />
          <Search size={24} className={s.searchIcon} />
        </>
      ) : (
        <>
          <BrandSoundcloud size={40} className={s.appLogo} />
          <div className={s.menuBarTextRow}>
            <div className={s.menuBarTextItem}>Browse</div>
            <div className={s.menuBarTextItem}>Library</div>
          </div>
          <Search size={28} className={s.searchIcon} />
        </>
      )}
    </div>
  );
}

export default Podcast;
