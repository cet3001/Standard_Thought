
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Printer, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  text: string;
  completed?: boolean;
}

interface QuickStartChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  downloadTitle?: string;
  bgColor?: string;
  accentColor?: string;
}

const QuickStartChecklist = ({ 
  title, 
  description, 
  items, 
  downloadTitle,
  bgColor = "bg-green-50/50 dark:bg-green-900/20",
  accentColor = "border-green-500"
}: QuickStartChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const handleDownload = () => {
    const checklistContent = `
${title}
${description}

${items.map((item, index) => `☐ ${item.text}`).join('\n')}

---
Downloaded from Hood Financial Literacy Resources
Visit us at: https://hoodfinancialliteracy.com/resources
    `.trim();

    const blob = new Blob([checklistContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${downloadTitle || title.replace(/\s+/g, '-').toLowerCase()}-checklist.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #247EFF; margin-bottom: 10px; }
            .description { margin-bottom: 20px; color: #666; }
            .checklist-item { margin: 10px 0; padding: 8px; border: 1px solid #eee; }
            .checkbox { margin-right: 10px; }
            .footer { margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <div class="description">${description}</div>
          ${items.map(item => `
            <div class="checklist-item">
              <input type="checkbox" class="checkbox" /> ${item.text}
            </div>
          `).join('')}
          <div class="footer">
            Downloaded from Hood Financial Literacy Resources<br>
            Visit us at: https://hoodfinancialliteracy.com/resources
          </div>
        </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Card className={`${bgColor} border-l-4 ${accentColor} mb-12`} role="complementary">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <HeaderHierarchy level={3} className="mb-0 text-lg font-bold text-green-700 dark:text-green-400">
                {title}
              </HeaderHierarchy>
            </CardTitle>
            <p className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
              {description}
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2 text-xs bg-gradient-to-r from-accent to-[#FFD700] hover:scale-105 text-black border-0 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Download checklist"
            >
              <Download className="h-3 w-3" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-2 text-xs bg-gradient-to-r from-accent to-[#FFD700] hover:scale-105 text-black border-0 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Print checklist"
            >
              <Printer className="h-3 w-3" />
              Print
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-3" role="list">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-3" role="listitem">
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors mt-0.5 flex-shrink-0 ${
                  checkedItems.has(item.id)
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-green-400'
                }`}
                aria-label={`Mark "${item.text}" as ${checkedItems.has(item.id) ? 'incomplete' : 'complete'}`}
              >
                {checkedItems.has(item.id) && (
                  <CheckCircle2 className="h-3 w-3" />
                )}
              </button>
              <span className={`text-sm leading-relaxed ${
                checkedItems.has(item.id) 
                  ? 'line-through text-[#0A0A0A]/50 dark:text-brand-cream/50' 
                  : 'text-[#0A0A0A] dark:text-brand-cream'
              }`}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-4 border-t border-green-200 dark:border-green-800">
          <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60">
            💡 <strong>Pro Tip:</strong> Complete these steps in order for best results. Check off each item as you finish it!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStartChecklist;
