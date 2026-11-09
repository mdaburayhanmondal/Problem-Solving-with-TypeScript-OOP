function multiplyValue(num1: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return num1 * 2;
  }
  return num1 * multiplier;
}

function processInput(inp: string | number | boolean): string | number {
  if (typeof inp === 'string') {
    return inp.trim().toLowerCase();
  } else if (typeof inp === 'number') {
    return inp * 10;
  }

  if (inp === true) {
    return 'Active';
  } else {
    return 'Inactive';
  }
}

function formatCoordinate(
  coord: readonly [latitude: number, longitude: number, locationName: string],
): string {
  const [lat, longi, loc] = coord;
  return `Location: ${loc} (${lat}, ${longi})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce<T[]>((ac, cur) => {
    return [...ac, ...cur];
  }, []);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course: Course) =>
      course.isPublished === true && course.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
