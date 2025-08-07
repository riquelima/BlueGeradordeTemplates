'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface EmailPreviewProps {
  template: string;
}

export function EmailPreview({ template }: EmailPreviewProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg">
      <CardHeader className="p-4 border-b">
        <h2 className="text-lg font-semibold">Live Preview</h2>
      </CardHeader>
      <CardContent className="p-0 flex-grow bg-white">
        <iframe
          srcDoc={template}
          title="Email Preview"
          className="w-full h-full border-0"
        />
      </CardContent>
    </Card>
  );
}
