export interface IEvent {
  id: string;
  agent_id: string;
  device_sn: string;
  timestamp: number;
  type: string;
  speed: number;
  max_g_norm: number;
  max_g_norm_at?: string | undefined;
  FRONT_camera_url: string;
  FRONT_camera_start_time: string;
  FRONT_camera_end_time: string;
  REAR_camera_url: string;
  REAR_camera_start_time: string;
  REAR_camera_end_time: string;
  max_g_norm_at_FRONT_video_time: number;
  latitude: number;
  longitude: number;
  max_g_norm_at_REAR_video_time: number;
  videos_txt_desc: string;
  video_labels: string;
  driver_coaching_feedback: string;
  incident_summary: string;
  'Driver Attention': {
    [key: string]: string | number;
  };
  'Driver Environment': {
    [key: string]: string | number;
  };
  'Driving Events': {
    [key: string]: string | number;
  };
}

export interface IEventVideoLabels {
  collision: string;
  near_collision: string;
  dashcam_not_mounted: string;
  speed: number;
  driver_overtaking: string;
  weather_conditions: string;
  '3rd_party_type': string;
  light_conditions: string;
  location: string;
  road_conditions: string;
  driver_distracted: string;
  driver_is_eating_or_drinking: string;
  driver_is_looking_on_the_road: string;
  driver_face_occluded: string;
  passengers_in_the_car: string;
}
