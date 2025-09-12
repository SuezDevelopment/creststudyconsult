# Component Documentation

## RedAsterisk Component

A reusable component for displaying a red asterisk, typically used to indicate required fields in forms.

### Basic Usage

```tsx
import { RedAsterisk } from '@/components/red-asteriks';

<Label htmlFor="email">Email <RedAsterisk /></Label>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes to apply to the asterisk |

## LabelWithAsterisk Component

A wrapper around the Label component that automatically includes a red asterisk for required fields.

### Basic Usage

```tsx
import { LabelWithAsterisk } from '@/components/ui/label-with-asterisk';

<LabelWithAsterisk htmlFor="email">Email</LabelWithAsterisk>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | true | Whether to display the red asterisk |
| ...props | LabelProps | - | All props from the Label component |

## FormLabelWithAsterisk Component

A wrapper around the FormLabel component that automatically includes a red asterisk for required fields.

### Basic Usage

```tsx
import { FormLabelWithAsterisk } from '@/components/ui/form-label-with-asterisk';

<FormLabelWithAsterisk>Email</FormLabelWithAsterisk>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| required | boolean | true | Whether to display the red asterisk |
| ...props | FormLabelProps | - | All props from the FormLabel component |

## Examples

See `components/examples/form-example.tsx` for complete usage examples of both simple labels and form integration.