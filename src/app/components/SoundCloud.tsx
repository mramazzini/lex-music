"use client";
import { getEmbedHtml } from "@/lib/soundcloud.actions";
import { useEffect, useState } from "react";

const SoundCloud = ({ url }: { url: string }) => {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);

  useEffect(() => {
    getEmbedHtml(url).then((html) => setEmbedHtml(html));
  }, [url]);

  return (
    <div className="w-full">
      {embedHtml && (
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
      )}
    </div>
  );
};

export default SoundCloud;
