import React from 'react';
import moment from 'moment';
import Success from './components/Success';
import Property from './components/Property';
import DetailsRow from './components/DetailsRow';
import LaunchInfoStyled from './LaunchInfoStyled';
import useGetLaunch from 'hooks/useGetLaunchById/useGetLaunchById';
import { ILaunch } from 'hooks/useGetLaunches/useGetLaunches.types';
import ArticleIcon from 'assets/Article';
import RedditIcon from 'assets/Reddit';
import WikipediaIcon from 'assets/Wikipedia';
import YouTubeIcon from 'assets/YouTube';
import LinkRow from './components/LinkRow';
import Link from './components/Link';
import Image from './components/Image';

const LaunchInfo = () => {
  const urlChunks = window.location.href.split('/');
  const id = urlChunks[urlChunks.length - 1];
  const launch = useGetLaunch(id) as ILaunch;
  return (
    <LaunchInfoStyled>
      <h2>{launch?.name}</h2>
      <Image src={launch?.links.flickr.original[0]} alt="Image is corrupted" />
      <h3>Details</h3>
      <DetailsRow>
        <div>
          <p>
            <Property>Date:</Property>{' '}
            {moment(launch?.date_utc).format('DD-MM-yyyy')}
          </p>
          <p>
            <Property>Time:</Property>{' '}
            {moment(launch?.date_utc).format('hh:mm')}
          </p>
        </div>
        <div>
          <p>
            <Property>Success:</Property>{' '}
            {launch?.success !== undefined && launch?.success !== null ? (
              <Success backgroundColor={launch?.success ? 'green' : 'red'}>
                {launch?.success?.toString()}
              </Success>
            ) : (
              <Success backgroundColor="gray">unknown</Success>
            )}
          </p>
          <p>
            <Property>Flight number:</Property> {launch?.flight_number}
          </p>
        </div>
      </DetailsRow>
      {launch?.links.article && (
        <LinkRow>
          <ArticleIcon width={24} height={24} />
          <Link href={launch?.links.article}>redirect to article.</Link>
        </LinkRow>
      )}
      {launch?.links.wikipedia && (
        <LinkRow>
          <WikipediaIcon width={24} height={24} />
          <Link href={launch?.links.wikipedia}>redirect to Wiki.</Link>
        </LinkRow>
      )}
      {launch?.links.reddit.campaign && (
        <LinkRow>
          <RedditIcon width={24} height={24} />
          <Link href={launch?.links.reddit.campaign}>redirect to reddit.</Link>
        </LinkRow>
      )}
      {launch?.links.webcast && (
        <LinkRow>
          <YouTubeIcon width={24} height={24} />
          <Link href={launch?.links.webcast}>redirect to webcast.</Link>
        </LinkRow>
      )}
      {launch?.details && (
        <>
          <h3>Description</h3>
          <p>{launch?.details}</p>
        </>
      )}
    </LaunchInfoStyled>
  );
};

export default LaunchInfo;
