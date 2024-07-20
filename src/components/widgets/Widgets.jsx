import { useEffect, useState } from "react";
import { apiClient } from "../../../spotify";

import WidgetCard from "@/components/widgets/WidgetCard";

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    if (artistId) {
      apiClient
        .get(`/artists/${artistId}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((err) => {
          throw new Error(err);
        });

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => {
          throw new Error(err);
        });

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [artistId]);

  console.log(similar);

  return (
    <div className="w-[95%] h-1/2 mt-2 mb-4 mx-auto bg-[rgb(30, 42, 62)] rounded-3xl flex items-center justify-evenly bg-custom-linear-zero  ">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Featured Playlists" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
