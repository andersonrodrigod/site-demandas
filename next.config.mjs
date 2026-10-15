const staticExport = process.env.STATIC_EXPORT === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default {
  ...(staticExport ? { output: 'export' } : {}),
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
