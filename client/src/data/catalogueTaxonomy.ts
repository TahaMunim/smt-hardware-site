export interface CatalogueDepartment {
  id: string;
  label: string;
  description: string;
  categories: string[];
}

/*
  SMT CATALOGUE TAXONOMY
  ======================

  Product records keep their existing category / subcategory values.
  This file only defines the customer-facing hierarchy above them:

  Department -> Category -> Subcategory

  That means we can improve catalogue navigation without rewriting
  hundreds of product records.
*/
export const catalogueDepartments: CatalogueDepartment[] = [
  {
    id: "tools-workshop",
    label: "Tools & Workshop",
    description:
      "Power tools, hand tools, automotive tools, measuring equipment, cutting tools, fastening tools and storage.",
    categories: [
      "Power Tools",
      "Hand Tools",
      "Automotive Tools",
      "Measuring Tools",
      "Cutting Tools",
      "Fastening Tools",
      "Tool Sets",
      "Tool Storage"
    ]
  },
  {
    id: "electrical-lighting",
    label: "Electrical & Lighting",
    description:
      "Electrical accessories, cables, cable management, lighting, ventilation, earthing and installation products.",
    categories: [
      "Electrical Accessories",
      "Electrical Tools",
      "Cable Management",
      "Cable Accessories",
      "Cables & Wires",
      "Lighting",
      "Ventilation",
      "Earthing",
      "Switchgear",
      "Electrical Equipment",
      "Pumps & Controls"
    ]
  },
  {
    id: "fasteners-fixings",
    label: "Fasteners & Fixings",
    description:
      "Screws, anchors, plugs, rivets, nails and other professional fixing solutions.",
    categories: [
      "Fasteners & Fixings"
    ]
  },
  {
    id: "safety-ppe",
    label: "Safety & PPE",
    description:
      "Workwear, footwear, head, eye, hand, hearing, respiratory, fall and site safety products.",
    categories: [
      "Safety Equipment"
    ]
  },
  {
    id: "construction-site",
    label: "Construction, Hardware & Site",
    description:
      "Construction equipment, material handling, general hardware, security products and site supplies.",
    categories: [
      "Construction Equipment",
      "Material Handling",
      "Hardware & Security",
      "Pest Control"
    ]
  },
  {
    id: "painting-finishing",
    label: "Painting, Adhesives & Surface Prep",
    description:
      "Painting accessories, sealants, adhesives, abrasives and surface preparation products.",
    categories: [
      "Painting Equipment",
      "Adhesives & Sealants",
      "Abrasives"
    ]
  },
  {
    id: "other",
    label: "Other Products",
    description:
      "Additional products that do not yet belong to a defined catalogue department.",
    categories: []
  }
];

const categoryToDepartment = new Map<string, string>();

for (const department of catalogueDepartments) {
  for (const category of department.categories) {
    categoryToDepartment.set(
      category,
      department.id
    );
  }
}

export function getDepartmentById(
  departmentId: string
) {
  return (
    catalogueDepartments.find(
      (department) =>
        department.id === departmentId
    ) ??
    catalogueDepartments.find(
      (department) =>
        department.id === "other"
    )!
  );
}

export function getDepartmentIdForCategory(
  category: string
) {
  return (
    categoryToDepartment.get(category) ??
    "other"
  );
}

export function getDepartmentForCategory(
  category: string
) {
  return getDepartmentById(
    getDepartmentIdForCategory(category)
  );
}

export function getCategoriesForDepartment(
  departmentId: string,
  allCategories: string[] = []
) {
  const department =
    getDepartmentById(departmentId);

  if (department.id !== "other") {
    return department.categories;
  }

  return allCategories.filter(
    (category) =>
      !categoryToDepartment.has(category)
  );
}
